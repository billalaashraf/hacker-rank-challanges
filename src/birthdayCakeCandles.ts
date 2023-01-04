function birthdayCakeCandles(candles: number[]): number {
    if (candles.length === 0) return 0;
    let results: number[] = []
    for (const candle of candles) {
        if (results.length > 0) {
            if (candle > results[0]) {
                results = []
                results.push(candle)
            } else
                if (candle === results[0]) results.push(candle)
        } else {
            results.push(candle)
        }
    }
    return results.length;
}

export default birthdayCakeCandles;