import Head from 'next/head'
  const Seo = (props : any) => (      
    <Head>
      {props.description && <meta name='description' content={props.description} data-react-helmet="true" />}
      <meta name="robots" content="index, follow" />
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
      {/* <!-- Schema.org markup for Google+ --> */}
      {props.title && <meta itemProp="name" content={props.title}/>}
      {props.description && <meta itemProp="description" content={props.description}/>}
      {props.image && <meta itemProp="image" content={props.image}/>}

      {/* <!-- Twitter Card data --> */}
      {props.image && <meta name="twitter:card" content={props.image} data-react-helmet="true" />}
      <meta name="twitter:site" content={"https://www.risethub.com"} data-react-helmet="true" />
      {props.title && <meta name="twitter:title" content={props.title} data-react-helmet="true" />}
      {props.description && <meta name="twitter:description" content={props.description} data-react-helmet="true" />}
      <meta name="twitter:creator" content="@risethub-dev"/>
      {/* <!-- Twitter summary card with large image must be at least 280x150px --> */}
      {props.image && <meta name="twitter:image:src" content={props.image} data-react-helmet="true" />}

      {/* <!-- Open Graph data --> */}
      {props.title && <meta property="og:title" content={props.title} data-react-helmet="true" />}
      {props.type && <meta property="og:type" content={props.type} data-react-helmet="true" />}
      {props.url && <meta property="og:url" content={props.url} data-react-helmet="true" />}
      {props.image ? (
      <meta property="og:image" content={`${props.image}`} data-react-helmet="true" />  
      ) : (
      <meta property="og:image" content="/images/og-image.png" data-react-helmet="true" />  
      )} 
      {props.description && <meta property="og:description" content={props.description} data-react-helmet="true" />}
      <meta property="og:site_name" content="RisetHub Indonesia" />
      {props.canonical && <link rel="canonical" href={props.canonical} data-react-helmet="true" />}

      <link rel="icon" type="image/png" href="favicon.ico" data-react-helmet="true" />
      <link rel="apple-touch-icon" href="/favicon.ico" data-react-helmet="true" />
      {props.css && <link rel="stylesheet" href={`${props.css}`} data-react-helmet="true" />}
    </Head>
  )
export default Seo;
