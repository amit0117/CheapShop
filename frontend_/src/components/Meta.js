<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To CheapShop',
  description: 'We sell the best products for cheap.',
  keywords: 'electronics, buy electronics, cheap electroincs',
}

=======
import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To CheapShop',
  description: 'We sell the best products for cheap.',
  keywords: 'electronics, buy electronics, cheap electroincs',
}

>>>>>>> 2e5265cb2c43261425b5782569d83d168965e9d9
export default Meta