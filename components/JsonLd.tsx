import Script from 'next/script'

interface JsonLdProps {
  data: Record<string, any> | Record<string, any>[]
}

/**
 * Reusable component for injecting JSON-LD structured data
 * Supports single object or array of objects
 */
export default function JsonLd({ data }: JsonLdProps) {
  const jsonLdArray = Array.isArray(data) ? data : [data]

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLdArray.length === 1 ? jsonLdArray[0] : jsonLdArray),
      }}
    />
  )
}
