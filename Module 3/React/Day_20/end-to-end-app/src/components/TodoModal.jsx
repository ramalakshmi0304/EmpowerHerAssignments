// src/components/TodoModal.jsx
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TodoModal({ isOpen, onClose, todo, onSave }) {
  const [title, setTitle] = useState(todo?.title || "");

  useEffect(() => {
    setTitle(todo?.title || "");
  }, [todo]);

  const handleSave = () => {
    if (title.trim()) {
      onSave({ title: title.trim() });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <div className="mt-2">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
