function getPercents(percent, number) {
    if (typeof percent === 'number' || typeof number === 'number') {
        if (percent < 0) {
            return "Зачем тебе отрицательные проценты???";
        } else {
            if (number !== null) {
                let result = number / 100 * percent;
                if (isNaN(result)) {
                    return "Что-то пошло не так";
                } else {
                    return result;
                }
            } else {
                return "Число не может быть равно null";
            }
        }
    }
}

module.exports = getPercents;