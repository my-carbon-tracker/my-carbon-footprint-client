
const getURL = (location, place, income, householdSize) => {
    const locationMode = `input_location_mode=${location}`;
    const homeLocation = `&input_location=${place}`;
    const yearlyIncome = `&input_income=${income}`;
    const size = `&input_size=${householdSize}`

    return `https://apis.berkeley.edu/coolclimate/footprint-defaults?${locationMode}${homeLocation}${yearlyIncome}${size}`;
}

export default getURL;