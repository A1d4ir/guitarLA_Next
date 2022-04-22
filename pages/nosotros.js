import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        pagina='Nosotros'
    >
        <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>

            <div className={styles.contenido}>
                <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros' />

                <div >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum aliquet dolor in pulvinar. 
                        Nunc venenatis, nunc nec interdum aliquet, enim ante bibendum ipsum, sit amet finibus massa diam vel odio. 
                        Integer in elit dictum, molestie sapien ut, hendrerit est. Donec porttitor tellus vitae est consequat egestas. 
                        Suspendisse sit amet pellentesque tellus, sit amet dictum lorem. Donec volutpat felis vitae ante commodo 
                        tincidunt. Sed a metus risus. Nullam tristique mollis velit eget interdum. Donec ultrices, ligula eget 
                        faucibus cursus, nisl velit finibus ante, et finibus diam lacus a neque. Duis vel facilisis magna,
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum aliquet dolor in pulvinar. 
                        Nunc venenatis, nunc nec interdum aliquet, enim ante bibendum ipsum, sit amet finibus massa diam vel odio. 
                        Integer in elit dictum, molestie sapien ut, hendrerit est. Donec porttitor tellus vitae est consequat egestas. 
                        Suspendisse sit amet pellentesque tellus, sit amet dictum lorem. Donec volutpat felis vitae ante commodo 
                        tincidunt. Sed a metus risus. Nullam tristique mollis velit eget interdum. Donec ultrices, ligula eget 
                        faucibus cursus, nisl velit finibus ante, et finibus diam lacus a neque. Duis vel facilisis magna,
                    </p>
                </div>
            </div>
        </main>
    </Layout>
  )
}

export default Nosotros