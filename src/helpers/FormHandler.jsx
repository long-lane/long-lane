const shortFormHandler = async (event, dispatch) => {
  
    event.preventDefault();
    const payload = { shortFormDelivery: 'pending' };
    const action = { type: "shortForm", payload: payload };
    dispatch(action);
  
    const formData = new FormData(event.target);
    const accessKey = '066ba2e2-cf93-40fe-86ae-5b539c229d67'

    formData.append("access_key", accessKey);
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
  
    if (res.success) {
      const payload = { shortFormDelivery: 'success' };
      const action = { type: "shortForm", payload: payload };
      
      dispatch(action);
      }
  };
  
  const contactFormHandler = async (event, dispatch) => {
    
    event.preventDefault();
    const payload = { contactFormDelivery: 'pending' };
    const action = { type: "contactForm", payload: payload };
    dispatch(action);
  
    const formData = new FormData(event.target);
    const accessKey = '066ba2e2-cf93-40fe-86ae-5b539c229d67'

  
    formData.append("access_key", accessKey);
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
  
    if (res.success) {
      
      const payload = { contactFormDelivery: 'success' };
      const action = { type: "contactForm", payload: payload };
      
      dispatch(action);
      
    }
  };
  
  export { shortFormHandler,contactFormHandler };