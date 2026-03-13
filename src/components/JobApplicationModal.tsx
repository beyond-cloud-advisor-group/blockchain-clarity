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
    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      toast({
        title: "Application submitted!",
        description: `Your application for ${jobTitle} has been received. We'll be in touch soon.`,
      });
    }, 1000);
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
            <Input id="name" required placeholder="Jane Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required placeholder="jane@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn / Portfolio URL</Label>
            <Input id="linkedin" placeholder="https://linkedin.com/in/..." />
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
