const cels = Number.parseFloat(prompt("Введите температуру в в градусах Цельсия"))
const far = + ((9 / 5) * cels + 32).toFixed(2)
alert(`Цельсий: ${cels}, Фаренгейт: ${far}`)