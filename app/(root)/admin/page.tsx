import CreateProduct from "@/components/product/CreateProduct";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminPage = () => {
  return (
    <div className="container mt-20">
      <Tabs defaultValue="orders">
        <TabsList className="dark:bg-[#191919]">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="create">Create</TabsTrigger>
        </TabsList>
        <TabsContent value="orders">
          <p>ALL ORDERS</p>
        </TabsContent>
        <TabsContent value="create">
          <CreateProduct />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPage;