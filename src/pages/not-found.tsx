import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Return Home
      </Button>
    </div>
  );
}
