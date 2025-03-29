// function pattern(str: string[]): number[] {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 1; j < str.length; j++) {
//             for (let k = 2; k < str.length; k++) {
//                 if (str[i] !== str[j] && str[i] !== str[k] && str[j] !== str[k]) {
//                     count++;
//                 } else {
//                     return 0;
//                 }
//             }
//         }
//     }
//     return count;
// }
function pattern(str: string[]): number {
    let count = 0;
    for (let i = 0; i < str.length - 2; i++) {
        for (let j = i + 1; j < str.length - 1; j++) {
            for (let k = j + 1; k < str.length; k++) {
                if (str[i] !== str[j] && str[i] !== str[k] && str[j] !== str[k]) {
                    count++;
                }
            }
        }
    }
    return count;
}
