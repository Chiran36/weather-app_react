export default function weatherComponent({children,value}){
    return (
        <>
        <div className="weathercomponent">
                        <article>
                            <p>{children}</p>
                            <p>{value}</p>
                        </article>
                    </div>
        </>
    )
}