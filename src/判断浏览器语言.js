/**
 * Created by ever on 2020/11/27.
 */
export const judgeLanguage=()=> {
  // 判断浏览器当前使用的语言
  let currentLanguage = (navigator.browserLanguage || navigator.language).toLowerCase();    // 非IE
  if (!currentLanguage) {    // IE浏览器
    currentLanguage = navigator.browserLanguage;
  }
  console.log(currentLanguage);
  return currentLanguage;
}
