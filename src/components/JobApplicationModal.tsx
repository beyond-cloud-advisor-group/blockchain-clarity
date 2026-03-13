import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface JobApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobTitle: string;
}

const JobApplicationModal = ({ open, onOpenChange, jobTitle }: JobApplicationModalProps) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const linkedin = formData.get("linkedin") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`Job Application: ${jobTitle} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nLinkedIn / Portfolio: ${linkedin || "N/A"}\n\nWhy interested:\n${message || "N/A"}`
    );
    const mailto = `mailto:hr@dantelabs.us,hiring@beyondcloudadvisor.com?subject=${subject}&body=${body}`;
    window.open(mailto, "_blank");

    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      toast({
        title: "Application submitted!",
        description: `Your email client should open with your application for ${jobTitle}. Please send the email to complete your application.`,
      });
    }, 500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-xl">Apply for {jobTitle}</DialogTitle>
          <DialogDescription>Fill out the form below and we'll get back to you shortly.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" required placeholder="Jane Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="jane@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn / Portfolio URL</Label>
            <Input id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Why are you interested?</Label>
            <Textarea id="message" rows={3} placeholder="Tell us a bit about yourself..." />
          </div>
          <Button type="submit" variant="hero" className="w-full" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Application"}
            {!submitting && <ArrowRight className="w-4 h-4 ml-1" />}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationModal;
