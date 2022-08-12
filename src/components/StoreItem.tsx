import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

export function StoreItem({ ...item }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(item.id);

  return (
    <>
      <Card className="h-100">
        <Image
          src={item.attributes.url}
          height={350}
          width={500}
          objectFit="cover"
        />

        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{item.attributes.name}</span>
            <span className="ms-2 text-muted">
              {formatCurrency(item.attributes.price)}
            </span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                onClick={() => increaseCartQuantity(item.id)}
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
                    onClick={() => decreaseCartQuantity(item.id)}
                    variant="secondary"
                  >
                    -
                  </Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button
                    onClick={() => increaseCartQuantity(item.id)}
                    variant="secondary"
                  >
                    +
                  </Button>
                </div>
                <Button
                  onClick={() => removeFromCart(item.id)}
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
    </>
  );
}
