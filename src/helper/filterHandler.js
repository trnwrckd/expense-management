const checkBoxFilter = (filteredList, list, filterArray) => {
  //   if price wasn't set, filteredList would be empty
  let currentList = filteredList.length === 0 ? list : filteredList
  console.log("fil 1,", filteredList)
  console.log("cur", currentList)
  // resetting filteredList
  if (filterArray.find((val) => val !== "")) {
    filteredList = []
  }

  // apply filter
  filterArray.forEach((filterParam) => {
    if (filterParam !== "") {
      console.log(filterParam)
      let tempList = currentList.filter((item) => item.type === filterParam.toLowerCase() || item.category === filterParam)
      tempList.forEach((tempItem) => {
        if (filteredList.findIndex((i) => tempItem.id === i.id) === -1) {
          filteredList.push(tempItem)
        }
      })
    }
  })
  console.log("fil", filteredList)

  return filteredList
}

const filterHandler = (filters, list) => {
  const minVal = filters.min.value
  const maxVal = filters.max.value

  // filter arrays. valid value ? value : ""
  const priceFilter = [minVal === "" ? "" : Number.parseInt(minVal), maxVal === "" ? "" : Number.parseInt(maxVal)]
  const typeFilter = [filters.income.checked ? filters.income.name : "", filters.expense.checked ? filters.expense.name : ""]
  const categoryFilter = [filters.food.checked ? filters.food.name : "", filters.travel.checked ? filters.travel.name : "", filters.salary.checked ? filters.salary.name : "", filters.utilities.checked ? filters.utilities.name : "", filters.medical.checked ? filters.medical.name : "", filters.personal.checked ? filters.personal.name : ""]

  let filteredList = []

  // apply price filter
  if (priceFilter[0] !== "" && priceFilter[1] !== "") {
    let itemsToPush = list.filter((item) => {
      let amount = Number.parseInt(item.amount)
      return amount >= priceFilter[0] && amount <= priceFilter[1]
    })
    itemsToPush.forEach((item) => {
      filteredList.push(item)
    })
  } else if (priceFilter[0] !== "") {
    let itemsToPush = list.filter((item) => Number.parseInt(item.amount) >= priceFilter[0])
    itemsToPush.forEach((item) => {
      filteredList.push(item)
    })
  } else if (priceFilter[1] !== "") {
    let itemsToPush = list.filter((item) => Number.parseInt(item.amount) <= priceFilter[1])
    itemsToPush.forEach((item) => {
      filteredList.push(item)
    })
  }

  filteredList = checkBoxFilter(filteredList, list, typeFilter)
  filteredList = checkBoxFilter(filteredList, list, categoryFilter)

  console.log("returning", filteredList)
  return filteredList
}

export default filterHandler
