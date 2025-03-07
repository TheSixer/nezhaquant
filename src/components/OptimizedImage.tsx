import Image from 'next/image'
import { useState } from 'react'
import { ImageProps } from 'next/image'
// 优化的图片组件，用于懒加载和渐进式加载
const OptimizedImage = ({
  src,
  alt,
  priority = false,
  ...props
}: { src: string; alt: string; priority?: boolean } & Omit<
  ImageProps,
  'src' | 'alt' | 'priority'
>) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  return (
    <div
      className={`relative overflow-hidden ${props.className || ''}`}
      style={props.style}
    >
      <Image
        src={src}
        alt={alt}
        quality={80} // 降低质量但保持视觉上接受
        loading={priority ? 'eager' : 'lazy'}
        priority={priority}
        onLoadingComplete={() => setIsLoaded(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
      {!isLoaded && <div className="absolute inset-0 animate-pulse bg-gray-200" />}
    </div>
  )
}

export default OptimizedImage
