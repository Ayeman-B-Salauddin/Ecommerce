import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";



export function StoreItem({ ...item }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(item.sys.id);

  const handleItem = () => {
    Swal.fire({
      imageUrl: item.fields.url,
      imageHeight: 360,
      imageWidth: 500,
      color: '#292929',
      background: '#fff',
      backdrop: `rgba(212, 212, 212, 0.7)`,
      imageAlt: 'custom image',
      text: item.fields.description,
      showDenyButton: true,
      confirmButtonText: 'Add to Cart',
      }).then((result) => {
      if (result.isConfirmed) {
      Swal.fire('Added! Keep shopping...', '', 'success')
      increaseCartQuantity(item.sys.id)
      
}})}

  return (
      <Card className="h-100">
        <button style={{border: '0', backgroundColor: 'white', fontFamily: 'Helvetica', margin: '0', padding: '0'}} onClick={handleItem}>
        <Image
          placeholder="blur"
          blurDataURL={item.fields.url}
          src={item.fields.url}
          height={350}
          width={500}
          objectFit="cover"
          alt="image of the selected product"
        />
        </button>

        <Card.Body className="d-flex flex-column">
          
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <button style={{border: '0', backgroundColor: 'white', fontFamily: 'Helvetica'}} onClick={handleItem}>
              <span className="fs-2">{item.fields.name}</span>
            </button>
            <span className="ms-2 text-muted">
              {formatCurrency(item.fields.price)}
            </span>
          </Card.Title>
          
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => increaseCartQuantity(item.sys.id)}
                variant="secondary"
              >
                + Add To Cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button
                    onClick={() => decreaseCartQuantity(item.sys.id)}
                    variant="secondary"
                  >
                    -
                  </Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button
                    onClick={() => increaseCartQuantity(item.sys.id)}
                    variant="secondary"
                  >
                    +
                  </Button>
                </div>
                <Button
                  onClick={() => removeFromCart(item.sys.id)}
                  variant="danger"
                  size="sm"
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
  );
}
