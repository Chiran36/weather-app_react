import styles from "./WeatherComponent.module.css";

export default function weatherComponent({children,value}){
    return (
        <>
        <div className={styles.weathercomponent}>
                        <article>
                            <p>{children}</p>
                            <p>{value}</p>
                        </article>
                    </div>
        </>
    )
}