import {B_URL} from './keys.js'
import{HtmlElement} from './domElement.js'


async function getData(endPint){
    const url=B_URL+endPint;
    const data= await fetch(url);
    const result = await data.json();
    return result    
}

export async function getCurrency(code){
    const endPint=`latest/${code}`
    const res=await getData(endPint)
    const result={
        base_code:res.base_code,
        rates:res.conversion_rates
    }
   return result
}

export async function getSuported(){
    const endPint=`codes`
    const result=await getData(endPint);
    return result.supported_codes
}



export function renderOpsions(suportedCodeArray,currency1,currency2){
    suportedCodeArray.forEach(code => {
        HtmlElement.select_1.innerHTML+=`
        <option ${code[0]==currency1 ? 'selected':''} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `
        HtmlElement.select_2.innerHTML+=`
        <option ${code[0]==currency2 ? 'selected':''} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `
    });
}




