import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export const Route = createFileRoute('/photo')({
  component: PhotoPage,
})

function PhotoPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; alt: string } | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const imagesPerPage = 9

  // Get available images (you can extend this array as you add more images)
  const availableImages = [
    // { id: 0, src: '/images/mualee.png', alt: 'Mualee' },
    // { id: 1, src: '/images/mualee1.jpg', alt: 'Mualee' },
    // Add more images here as needed:
    { id: 2, src: '/images/mualee2.JPG',small:'/images/smalls/mualee2.JPG', alt: 'Mualee' },
    { id: 3, src: '/images/mualee3.JPG', small:'/images/smalls/mualee3.JPG', alt: 'Mua lee' },
    { id: 4, src: '/images/mualee4.JPG',   small:'/images/smalls/mualee4.JPG', alt: 'Mua lee' },
    { id: 5, src: '/images/mualee5.JPG',   small:'/images/smalls/mualee5.JPG', alt: 'mualee' },
    { id: 6, src: '/images/mualee6.JPG',   small:'/images/smalls/mualee6.JPG', alt: 'mualee' },
    { id: 7, src: '/images/mualee7.JPG', small:'/images/smalls/mualee7.JPG', alt: 'mua lee' },
    { id: 8, src: '/images/mualee8.JPG', small:'/images/smalls/mualee8.JPG', alt: 'mua lee' },
    { id: 9, src: '/images/mualee9.JPG', small:'/images/smalls/mualee9.JPG', alt: 'Mualee vf' },
    { id: 10, src: '/images/mualee10.JPG', small:'/images/smalls/mualee10.JPG', alt: 'mualee vf' },
    { id: 11, src: '/images/mualee11.JPG', small:'/images/smalls/mualee11.JPG', alt: 'Mua lee vf' },
    { id: 12, src: '/images/mualee12.JPG', small:'/images/smalls/mualee12.JPG', alt: 'mualee vf' },
  ]

  const totalPages = Math.ceil(availableImages.length / imagesPerPage)
  const startIndex = currentPage * imagesPerPage
  const currentImages = availableImages.slice(startIndex, startIndex + imagesPerPage)

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
  }

  const handleDownload = async () => {
    if (!selectedImage) return
    
    try {
      const response = await fetch(selectedImage.src)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${selectedImage.alt.replace(/\s+/g, '_')}_${selectedImage.id}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id))
  }

  return (
    <div className="relative px-4 md:px-0 scroll-smooth">
        <Navbar />
    <div className="container px-4 py-20 mx-auto">
        
      <h1 className="mb-8 text-4xl font-bold text-center">Photo Gallery</h1>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6">
            {/* Image Grid - 3 columns x 3 rows */}
            <div className="grid grid-cols-3 gap-4">
              {currentImages.map((img) => (
                <div
                  key={img.id}
                  className="overflow-hidden transition-transform rounded-lg cursor-pointer hover:scale-105"
                  onClick={() => setSelectedImage(img)}
                >
                  {!loadedImages.has(img.id) && (
                    <Skeleton className="w-full h-64" />
                  )}
                  <img
                    src={img.small}
                    alt={img.alt}
                    className={`object-cover w-full h-64 ${!loadedImages.has(img.id) ? 'hidden' : ''}`}
                    onLoad={() => handleImageLoad(img.id)}
                  />
                  {/* <div className="p-2 text-sm text-center bg-muted/50">
                    {img.alt}
                  </div> */}
                </div>
              ))}
            </div>

            {/* Image Dialog */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>

                  <DialogContent className="w-auto max-w-sm">
                <DialogHeader >
                  <DialogTitle>Mualee</DialogTitle>
                 
                </DialogHeader>
                <div className="flex items-center justify-center">
                  <img
                    src={selectedImage?.src}
                    alt={selectedImage?.alt}
                    className="max-h-[70vh] w-auto object-contain rounded-lg"
                  />
                </div>
                <DialogFooter className="gap-2 ">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedImage(null)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleDownload}>
                    Download
                  </Button>
                </DialogFooter>
              </DialogContent>
            
            </Dialog>

            {/* Previous/Next navigation */}
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                onClick={goToPreviousPage}
                disabled={totalPages <= 1}
              >
                ← Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage + 1} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={goToNextPage}
                disabled={totalPages <= 1}
              >
                Next →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>  
    </div>
  
    
  )
}
