/* eslint-disable */
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";

const ProductDetailsModal = ({ product, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      
      {isOpen && <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-40" />}

      <DialogContent className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6 z-50">
        <DialogHeader>
          <DialogTitle className="text-white text-lg text-center">{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-white">
          <div className="flex justify-center mb-4">
            <img 
              src={product.image} 
              alt={product.name} 
              className="rounded-lg h-48 w-auto object-cover shadow-lg border border-white/20" 
            />
          </div>

          <div className="grid grid-cols-4 items-start gap-4">
            <span className="font-semibold">Category:</span>
            <span className="col-span-3">{product.category}</span>
          </div>
          
          {product.category === "Book" && (
            <>
              <div className="grid grid-cols-4 items-start gap-4">
                <span className="font-semibold">Publisher:</span>
                <span className="col-span-3">{product.publisher}</span>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <span className="font-semibold">Published:</span>
                <span className="col-span-3">{product.publishedDate}</span>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <span className="font-semibold">ISBN:</span>
                <span className="col-span-3">{product.isbn}</span>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <span className="font-semibold">Pages:</span>
                <span className="col-span-3">{product.pages}</span>
              </div>
              {product.subjects && (
                <div className="grid grid-cols-4 items-start gap-4">
                  <span className="font-semibold">Subjects:</span>
                  <div className="col-span-3 flex flex-wrap gap-2">
                    {product.subjects.map((subject, index) => (
                      <span key={index} className="bg-white/20 text-white px-2 py-1 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {product.category === "Course" && (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-semibold">Duration:</span>
                <span className="col-span-3">{product.duration}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="font-semibold">Level:</span>
                <span className="col-span-3">{product.level}</span>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsModal;
