'use client'

function UNC(className="",eltName=""){ //Utilities_Navbars_className
    return className.split(' ')[0]+"__"+eltName+" "+className.split(' ')?.[1]
} 

export function NavbarsBtnHambergur({className="B5-HeaderNavbar never"}){
    return <button className={UNC(className,'hamburgerBtn')}
        onClick={e => {
            const target = e.target.nodeName=="SPAN" ? e.target.closest('button') : e.target
            target.classList.toggle('active')
        }}
        // aria-controls="navbarCollapse"
        // aria-expanded="false"
        // aria-label="Toggle navigation"
    >
        <span />
    </button>
}
export function NavbarsNav(className="B5-HeaderNavbar never"){
    return <ul className={UNC(className,"nav")}>
        {
            ["Home", "Link", "Disabled"]
                .map((item, i) => <li key={"navbar__nav__"+i}>
                    <a className={i == 0 ? "active" : ""} aria-current="page" href="#">{item}</a>
                    {/* <a className="disabled">Disabled</a> */}
                </li>
                )
        }
        <li className="dropdown">
            <DropBox />
        </li>
        <li>
            <SearchBox />
        </li>
    </ul>
}



export function Logo01({wh="40:32",slogan="Simple header",href="/",imgSrc="next.svg"}){
    return <a href={href}>
        
        {imgSrc?<img width={wh.split(":")[0]} height={wh.split(":")[1]} src={imgSrc} alt={slogan} />:<svg width={wh.split(":")[0]} height={wh.split(":")[1]}><use href={"#bootstrap"} /></svg>}
        <span>{slogan}</span>
    </a>
}
export function NavLinks01({links=[["Home","#"],["Features","#"],["Pricing","#"],["FAQs","#"],["About","#"],]}){
    return <ul>
        {links.map((item,i) => <li key={"navpill__item__"+i}>
            <a className={i == 0 ? "active" : ""} {...(i==0?{"aria-current":"page"}:{})} href={item[1]}>{item[0]}</a>
            {/* <a className="disabled">Disabled</a> */}
        </li>)}
    </ul>
}
export function NavLinks02Icons({links=[["Home","#"],["Features","#"],["Pricing","#"],["FAQs","#"],["About","#"],]}){
    return <ul>
        {links.map((item,i) => <li key={"navpill__item__"+i}>
            <a className={i == 0 ? "active" : ""} {...(i==0?{"aria-current":"page"}:{})} href={item[1]}>
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#home" /></svg>
                {item[0]}
            </a>
            {/* <a className="disabled">Disabled</a> */}
        </li>)}
    </ul>
}
export function DropBox({
    $data = {},
    imgSrc="",
    contentText="Sample Text",
    events={onClick:e => {alert('ok')}}
}) {
    // const id = "dropdown"+(Math.ceil(Math.random()*100))
    const id = ""
    console.log(events)
    return <>
        <a  href="#"
            onClick={e => {
                let bool = false
                if(e.target.classList.contains('active')){
                    bool =! bool
                }
                e.target.closest('header').querySelectorAll("a.active").forEach((item) => {item.classList.remove('active')})
                if(bool)e.target.classList.remove('active')
                else e.target.classList.add('active')
            }}
            // onBlur={e => {e.target.classList.remove('active')}}
            id={id}
            aria-expanded="false"
        >
            {imgSrc?<img src={imgSrc} alt={contentText} />:contentText}
        </a>
        <ul aria-labelledby={id}>
            {
                [["Action","#"], ["Another action","#"], [""],["Somthing else here","#"]]
                    //   $data
                    .map((item, i) =>  <li key={id +"_"+ i} {...events}>
                        {(item==""||item[0]=="") ?<hr className="dropdown-divider" />:<a href={item[1]}>{item[0]}</a>}
                    </li>)
            }
        </ul>
    </>
}
export function SearchBox(){

    return< form>
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">🔎</button>
    </form>
}
export function LogSignInOut(){

    return <form>
        <button type="button">Login</button>
        <button type="button">Sign-up</button>
    </form>
}

