// import ReactTooltip from "react-tooltip";
import { PortableText as PortableTextComponent } from '@portabletext/react'
// import * as createImageUrlBuilder from '@sanity/image-url'
import { createClient, createPreviewSubscriptionHook } from 'next-sanity'
import { config } from './config'
// console.log('createImageUrlBuilder: ', createImageUrlBuilder);

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.')
}
// export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// export const imageBuilder = (source) => imageUrlBuilder(config).image(source)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const PortableText = (props) => (
  <PortableTextComponent components={{}} {...props} />
)

export const client = createClient(config)

export const previewClient = createClient({
  ...config,
  useCdn: false,
})

export const getClient = (usePreview) => (usePreview ? previewClient : client)
export default client
