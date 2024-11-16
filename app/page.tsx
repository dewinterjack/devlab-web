"use client";

import { ImageUpload } from "@/components/ui/image-upload";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface UploadResponse {
  observations: string[];
  success: boolean;
}

export default function Home() {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const handleImageUpload = async (file: File) => {
    try {
      setIsUploading(true);
      setResults([]);
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('https://jackd-methodicaltealhaddock.web.val.run', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data: UploadResponse = await response.json();
      
      if (data.success) {
        setResults(data.observations);
        toast({
          title: "Success",
          description: "Image analyzed successfully",
        });
      } else {
        throw new Error('Analysis failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze image",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Image Summary</h1>
          <p className="text-lg text-muted-foreground">
            Upload an image to get AI-powered observations
          </p>
        </div>
        
        <Card className="p-6">
          <ImageUpload onImageUpload={handleImageUpload} isUploading={isUploading} />
        </Card>

        {isUploading && (
          <Card className="p-6 flex items-center justify-center">
            <div className="text-center space-y-4">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
              <p className="text-muted-foreground">Analyzing image...</p>
            </div>
          </Card>
        )}

        {results.length > 0 && (
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Observations</h2>
            <ul className="space-y-2">
              {results.map((observation, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{observation}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </main>
  );
}