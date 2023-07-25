import React, { useReducer } from "react";
import { PricingReducer } from "./../../reducers/Reducers";
import { HashLink } from "react-router-hash-link";
import { plansDescriptionData } from "./../data/Data";
import { IconContext } from "react-icons";
import { BsCheck2, BsX } from "react-icons/bs";
import { PiPlantLight, PiPottedPlant, PiTreeLight } from "react-icons/pi";
import { ShortForm } from "./ShortForm";
import { useInView } from "react-intersection-observer";

export const Pricing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px",
    threshold: 0,
  });

  const [state, dispatch] = useReducer(PricingReducer, {
    plan: null,
    billingMethod: "Monthly",
  });
  const selectPlan = (plan) => {
    dispatch({ type: "plan", payload: { plan: plan } });
  };
  const showBillingOptions = (ev) => {
    dispatch({
      type: "billingMethod",
      payload: { billingMethod: ev.target.dataset.billingMethod },
    });
  };

  return (
    <section className="pricing" id="pricing">
      <article>
        <h2>pricing</h2>
        <p>select your plan</p>
        <div>
          <input
            type="button"
            data-billing-method="Monthly"
            value="Monthly"
            onClick={(ev) => showBillingOptions(ev)}
            className={
              state.billingMethod === "Monthly"
                ? "plan-active"
                : "plan-inactive"
            }
          />
          <input
            type="button"
            data-billing-method="One-off"
            value="One-off"
            onClick={(ev) => showBillingOptions(ev)}
            className={
              state.billingMethod === "One-off"
                ? "plan-active"
                : "plan-inactive"
            }
          />
        </div>
      </article>
      <article ref={ref}>
        {plansDescriptionData.map((plan, index) => {
          return (
            <HashLink
              to="#short-form"
              onClick={(ev) => {
                selectPlan(plan.name);
              }}
              key={`card-${index}`}
            >
              <div key={plan.name} className={inView ? 'animate' : ''}>
                <IconContext.Provider value={{ color: "#4f4ad7" }}>
                  <h3>
                    {plan.name === "starter" ? (
                      <PiPlantLight />
                    ) : plan.name === "growth" ? (
                      <PiPottedPlant />
                    ) : (
                      <PiTreeLight />
                    )}
                    {plan.name}
                  </h3>
                </IconContext.Provider>

                <p>
                  {(state.billingMethod === "Monthly"
                    ? plan.monthlyPrice
                    : plan.annualPrice
                  ).toLocaleString("en-GB", {
                    style: "currency",
                    currency: "GBP",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}{" "}
                  <span>{state.billingMethod}</span>
                </p>

                <ul>
                  <IconContext.Provider
                    value={{ color: "#4f4ad7", size: "20px" }}
                  >
                    {plan.inc.map((item, index) => {
                      return (
                        <li key={`inc-${index}`} plan="inc">
                          <BsCheck2 /> {item}
                        </li>
                      );
                    })}
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ color: "#dd3c73", size: "20px" }}
                  >
                    {plan.notInc.map((item, index) => {
                      return (
                        <li key={`notInc-${index}`} plan="notInc">
                          <BsX /> {item}
                        </li>
                      );
                    })}
                  </IconContext.Provider>
                </ul>

                {/* <HashLink
                to="#short-form"
                className="btn secondary-btn"
                value="let's go"
                onClick={(ev) => {
                  selectPlan(plan.name);
                }}
              >
              <FiArrowUpRight />
              </HashLink> */}
              </div>
            </HashLink>
          );
        })}
      </article>
      {state.plan ? <ShortForm props={state} /> : ""}
    </section>
  );
};
