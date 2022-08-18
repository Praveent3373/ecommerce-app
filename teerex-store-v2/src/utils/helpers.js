
export const getUniqueValues = (data, type) => {
    const unique = data.map((el) => el[type])
    return [...new Set(unique)]
}