import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Import the three apps
import FeedbackFormApp from "./FeedbackFormApp";
import ImageSlideshowApp from "./ImageSlideshowApp";
import TodoListApp from "./TodoListApp";

const App = () => {
  const [activeTab, setActiveTab] = useState("feedback");

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold text-center">Mini React Apps Practice</h1>

      {/* Tabs to switch between apps */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="feedback">Feedback Form</TabsTrigger>
          <TabsTrigger value="slideshow">Image Slideshow</TabsTrigger>
          <TabsTrigger value="todo">Todo List</TabsTrigger>
        </TabsList>

        <TabsContent value="feedback">
          <FeedbackFormApp />
        </TabsContent>

        <TabsContent value="slideshow">
          <ImageSlideshowApp />
        </TabsContent>

        <TabsContent value="todo">
          <TodoListApp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default App;
