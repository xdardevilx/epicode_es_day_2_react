export function currencyEuro(txt){
    let _txt = txt.replace('.',',')
    _txt = _txt + " €"
    return _txt
}