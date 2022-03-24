import moment from "moment";

export const getGreetingTime = () => {
  let currentTime = new Date();

  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 15; // 24hr time to split the evening
  const currentHour = moment(currentTime).format("HH");

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return "Good Afternoon";
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return "Good Evening";
  }
  // Between Dawn and noon
  return "Good Morning";
};



export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
  let input = findByTestAtrr(wrapper, inputSelector);
  input.simulate("change", {
    target: { name: inputSelector, value: newValue },
  });

  return findByTestAtrr(wrapper, inputSelector);
};


export const simulateCheckBox = (wrapper, inputSelector, newValue) => {
    let input = findByTestAtrr(wrapper, inputSelector);
    input.simulate('change', {target: {name:inputSelector,checked: newValue}});
  
    return findByTestAtrr(wrapper, inputSelector);
  };

  