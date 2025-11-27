import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Package,
  Layers,
  Newspaper,
  Settings,
  ArrowRight,
  Plus,
  Pencil,
  Trash2,
  Eye,
  Check,
  X,
  Save,
} from "lucide-react";
import {
  Config,
  PageInfo,
  pageInfoList,
  initialConfigs,
  Banner,
} from "../mockData/adminData";

import { HeroSlider } from "../components/HeroSlider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Alert, AlertDescription } from "../components/ui/alert";
import { ImageUpload } from "../components/admin/ImageUpload";
import { ScrollArea } from "../components/ui/scroll-area";
import { getMainPages } from "../api/mainPageApi";

interface AdminDashboardProps {
  totalProducts: number;
  totalSeries: number;
  totalNews: number;
  banners: Banner[];
  onNavigate: (page: string) => void;
  onSaveBanners: (banners: Banner[]) => void;
}

export function AdminDashboard({
  totalProducts,
  totalSeries,
  totalNews,
  banners,
  onNavigate,
  onSaveBanners,
}: AdminDashboardProps) {
  const [configs, setConfigs] = useState<Config[]>(initialConfigs);
  const [pages] = useState<PageInfo[]>(pageInfoList);
  const [selectedPage, setSelectedPage] = useState<PageInfo | null>(null);
  const [editConfig, setEditConfig] = useState<{
    type: "contact" | "banner";
    data: Config | null;
  }>({ type: "contact", data: null });
  const [showSuccess, setShowSuccess] = useState(false);

  // States for Contact editing
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [editingContacts, setEditingContacts] = useState<Config[]>([]);

  // States for Banner editing
  const [showBannerDialog, setShowBannerDialog] = useState(false);
  const [editingBanners, setEditingBanners] = useState<Banner[]>([]);

  const quickLinks = [
    {
      label: "Quản lý Sản phẩm",
      icon: Package,
      page: "products",
      color: "bg-green-500",
    },
    {
      label: "Quản lý Dòng xe",
      icon: Layers,
      page: "series",
      color: "bg-green-600",
    },
    {
      label: "Quản lý Tin tức",
      icon: Newspaper,
      page: "news",
      color: "bg-green-700",
    },
  ];

  const getContactConfigs = () => {
    return configs.filter((c) => c.group === "contact");
  };

  const deleteContactConfig = (configId: number) => {
    setConfigs((prev) => prev.filter((c) => c.config_id !== configId));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const addContactConfig = (key: string, value: string) => {
    const newId = Math.max(...configs.map((c) => c.config_id)) + 1;
    setConfigs((prev) => [
      ...prev,
      {
        config_id: newId,
        key,
        value,
        group: "contact",
      },
    ]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const updateContactConfig = (
    configId: number,
    type: string,
    value: string
  ) => {
    setConfigs((prev) =>
      prev.map((c) =>
        c.config_id === configId ? { ...c, key: `contact_${type}`, value } : c
      )
    );
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Contact dialog functions
  const openContactEdit = () => {
    setEditingContacts([...getContactConfigs()]);
    setShowContactDialog(true);
  };

  const handleContactTypeChange = (index: number, type: string) => {
    setEditingContacts((prev) =>
      prev.map((contact, i) =>
        i === index ? { ...contact, key: `contact_${type}` } : contact
      )
    );
  };

  const handleContactValueChange = (index: number, value: string) => {
    setEditingContacts((prev) =>
      prev.map((contact, i) => (i === index ? { ...contact, value } : contact))
    );
  };

  const handleAddContact = () => {
    const newId = Math.max(...configs.map((c) => c.config_id), 0) + 1;
    setEditingContacts((prev) => [
      ...prev,
      {
        config_id: newId,
        key: "contact_Sđt",
        value: "",
        group: "contact",
      },
    ]);
  };

  const handleDeleteContact = (index: number) => {
    setEditingContacts((prev) => prev.filter((_, i) => i !== index));
  };

  const saveContacts = () => {
    // Validate: tất cả contacts phải có giá trị
    const hasInvalidContact = editingContacts.some((c) => !c.value.trim());
    if (hasInvalidContact) {
      alert("Tất cả thông tin liên hệ phải có giá trị!");
      return;
    }

    // Update configs: remove old contacts and add new ones
    setConfigs((prev) => [
      ...prev.filter((c) => c.group !== "contact"),
      ...editingContacts,
    ]);

    setShowContactDialog(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const cancelContactEdit = () => {
    setShowContactDialog(false);
    setEditingContacts([]);
  };

  // Banner functions
  const openBannerEdit = () => {
    setEditingBanners([...banners]);
    setShowBannerDialog(true);
  };

  const handleBannerImageChange = (index: number, image: string) => {
    setEditingBanners((prev) =>
      prev.map((banner, i) => (i === index ? { ...banner, image } : banner))
    );
  };

  const handleBannerLinkChange = (index: number, link: string) => {
    setEditingBanners((prev) =>
      prev.map((banner, i) => (i === index ? { ...banner, link } : banner))
    );
  };

  const handleAddBanner = () => {
    const newId = Math.max(...editingBanners.map((b) => b.id), 0) + 1;
    setEditingBanners((prev) => [
      ...prev,
      {
        id: newId,
        image: "",
        link: "",
        sort_order: prev.length + 1,
      },
    ]);
  };

  const handleDeleteBanner = (index: number) => {
    setEditingBanners((prev) => prev.filter((_, i) => i !== index));
  };

  const saveBanners = () => {
    // Validate: tất cả banners phải có cả image và link
    const hasInvalidBanner = editingBanners.some((b) => !b.image || !b.link);
    if (hasInvalidBanner) {
      alert("Tất cả banner phải có cả hình ảnh và link!");
      return;
    }

    // Update sort_order
    const updatedBanners = editingBanners.map((banner, index) => ({
      ...banner,
      sort_order: index + 1,
    }));

    onSaveBanners(updatedBanners);
    setShowBannerDialog(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const cancelBannerEdit = () => {
    setShowBannerDialog(false);
    setEditingBanners([]);
  };

  const [mainPage, setMainPage] = useState<any[]>([]);

  const fetchMainPages = async () => {
    try {
      const res = await getMainPages();
      setMainPage(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMainPages();
  }, []);

  return (
    <div className="space-y-6">
      {showSuccess && (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Cập nhật thành công!
          </AlertDescription>
        </Alert>
      )}

      {/* Configuration Tabs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Cấu hình hệ thống
          </CardTitle>
          <CardDescription>
            Quản lý các thiết lập chung của website
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Banner Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3>Banner Trang chủ</h3>
              <Button
                onClick={openBannerEdit}
                variant="outline"
                className="gap-2"
              >
                <Pencil className="w-4 h-4" />
                Chỉnh sửa
              </Button>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <HeroSlider
                slides={banners.map((b) => ({ image: b.image, link: b.link }))}
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3>Thông tin Liên hệ</h3>
              <Button
                onClick={openContactEdit}
                variant="outline"
                className="gap-2"
              >
                <Pencil className="w-4 h-4" />
                Chỉnh sửa
              </Button>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Loại</TableHead>
                    <TableHead>Giá trị</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getContactConfigs().map((config) => (
                    <TableRow key={config.config_id}>
                      <TableCell>
                        {config.key.replace("contact_", "").replace(/_/g, " ")}
                      </TableCell>
                      <TableCell>{config.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Banner Edit Dialog */}
      <Dialog open={showBannerDialog} onOpenChange={cancelBannerEdit}>
        <DialogContent className="w-[95vw] sm:!w-[90vw] sm:!max-w-[90vw] md:!w-[85vw] md:!max-w-[1200px] max-h-[90vh] p-0">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle>Cấu hình Banner Trang chủ</DialogTitle>
            <DialogDescription>
              Thêm hoặc chỉnh sửa banner carousel. Mỗi banner phải có cả hình
              ảnh và link.
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="max-h-[calc(90vh-120px)] px-6">
            <div className="space-y-6 pb-6">
              <div className="space-y-4">
                {editingBanners.map((banner, index) => (
                  <Card key={banner.id} className="relative">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4>Banner {index + 1}</h4>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteBanner(index)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <Label>Hình ảnh *</Label>
                        <ImageUpload
                          value={banner.image}
                          onChange={(url) =>
                            handleBannerImageChange(index, url)
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Link *</Label>
                        <Input
                          value={banner.link}
                          onChange={(e) =>
                            handleBannerLinkChange(index, e.target.value)
                          }
                          placeholder="/products hoặc /about hoặc /news"
                        />
                        <p className="text-xs text-gray-500">
                          Ví dụ: /products, /about, /news
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddBanner}
                  className="w-full gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Thêm banner
                </Button>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={cancelBannerEdit}
                >
                  Hủy
                </Button>
                <Button type="button" onClick={saveBanners} className="gap-2">
                  <Save className="w-4 h-4" />
                  Lưu
                </Button>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Contact Edit Dialog */}
      <Dialog open={showContactDialog} onOpenChange={cancelContactEdit}>
        <DialogContent className="w-[95vw] sm:!w-[90vw] sm:!max-w-[90vw] md:!w-[85vw] md:!max-w-[800px] max-h-[90vh] p-0">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle>Cấu hình Thông tin Liên hệ</DialogTitle>
            <DialogDescription>
              Thêm, sửa hoặc xóa thông tin liên hệ. Tất cả thông tin phải có giá
              trị.
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="max-h-[calc(90vh-120px)] px-6">
            <div className="space-y-6 pb-6">
              <div className="space-y-4">
                {editingContacts.map((contact, index) => (
                  <Card key={contact.config_id} className="relative">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4>Thông tin {index + 1}</h4>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteContact(index)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <Label>Loại *</Label>
                        <Select
                          value={contact.key.replace("contact_", "")}
                          onValueChange={(value: any) =>
                            handleContactTypeChange(index, value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Sđt">Sđt</SelectItem>
                            <SelectItem value="Zalo">Zalo</SelectItem>
                            <SelectItem value="facebook">facebook</SelectItem>
                            <SelectItem value="Địa chỉ">Địa chỉ</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Giá trị *</Label>
                        <Input
                          value={contact.value}
                          onChange={(e) =>
                            handleContactValueChange(index, e.target.value)
                          }
                          placeholder="Nhập giá trị..."
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddContact}
                  className="w-full gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Thêm thông tin liên hệ
                </Button>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={cancelContactEdit}
                >
                  Hủy
                </Button>
                <Button type="button" onClick={saveContacts} className="gap-2">
                  <Save className="w-4 h-4" />
                  Lưu
                </Button>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
