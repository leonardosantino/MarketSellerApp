import { Divider } from "@mui/material";

import { Col, Deco, Paper, Row, Text } from "@/com/ui";
import { color } from "@/com/ui/style/scheme";

export function BestSellers() {
  return (
    <Paper sx={{ flexGrow: 1 }}>
      <Col sx={{ padding: 1 }}>
        <Row sx={{ gap: 1 }}>
          <Deco
            sx={{
              backgroundColor: color.info,
              width: 20,
              height: 30,
            }}
          />
          <Text variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Mais Vendidos
          </Text>
        </Row>

        <Col sx={{ gap: 2 }}>
          {data.map((product) => (
            <Col key={`best-seller-${product.id}`}>
              <Row
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Text sx={{ fontWeight: 500 }}>{product.name}</Text>
                <Text variant="body2">{product.sales.toString()}</Text>
              </Row>
              <Divider />
            </Col>
          ))}
        </Col>
      </Col>
    </Paper>
  );
}

const data = [
  { id: 1, name: "Smart Watch", sales: 189, revenue: "$9,450", progress: 70 },
  { id: 2, name: "Laptop Stand", sales: 156, revenue: "$4,680", progress: 60 },
  { id: 3, name: "USB-C Cable", sales: 134, revenue: "$2,010", progress: 45 },
  { id: 4, name: "Phone Case", sales: 98, revenue: "$1,470", progress: 35 },
  {
    id: 5,
    name: "Wireless Headphones",
    sales: 245,
    revenue: "$12,250",
    progress: 85,
  },
];
