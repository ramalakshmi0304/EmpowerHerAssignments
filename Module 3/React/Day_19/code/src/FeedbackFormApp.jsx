import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const FeedbackFormApp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !feedback) return;
    setSubmissions([...submissions, { name, email, feedback }]);
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <form onSubmit={handleSubmit} className="space-y-2">
          <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <Textarea placeholder="Feedback" value={feedback} onChange={e => setFeedback(e.target.value)} />
          <Button type="submit">Submit</Button>
        </form>
      </Card>

      {submissions.map((s, index) => (
        <Card key={index} className="p-4">
          <p><b>Name:</b> {s.name}</p>
          <p><b>Email:</b> {s.email}</p>
          <p><b>Feedback:</b> {s.feedback}</p>
        </Card>
      ))}
    </div>
  );
};

export default FeedbackFormApp;
