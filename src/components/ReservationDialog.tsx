import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ReservationDialogProps {
  trigger: ReactNode;
}

export const ReservationDialog = ({ trigger }: ReservationDialogProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", party: "2", date: "", time: "19:00", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation requested",
      description: `Grazie, ${form.name}! We'll confirm your table for ${form.party} on ${form.date} at ${form.time} shortly.`,
    });
    setOpen(false);
    setForm({ name: "", party: "2", date: "", time: "19:00", phone: "" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Reserve Your Table</DialogTitle>
          <DialogDescription>
            We'll be in touch to confirm. For same-day reservations, please call (540) 989-6277.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="r-name">Full name</Label>
            <Input id="r-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="r-party">Party size</Label>
              <Input id="r-party" type="number" min={1} max={20} required value={form.party} onChange={(e) => setForm({ ...form, party: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="r-phone">Phone</Label>
              <Input id="r-phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="r-date">Date</Label>
              <Input id="r-date" type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="r-time">Time</Label>
              <Input id="r-time" type="time" required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">Request Reservation</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
