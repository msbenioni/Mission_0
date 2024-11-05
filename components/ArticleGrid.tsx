import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    description:
      "Exploring the latest developments in AI and their impact on society.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    category: "Technology",
  },
  {
    id: 2,
    title: "Sustainable Living in Modern Cities",
    description:
      "How urban communities are adapting to environmental challenges.",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
    category: "Environment",
  },
  {
    id: 3,
    title: "The Rise of Remote Work",
    description: "Examining the shift towards flexible working arrangements.",
    image:
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=800&q=80",
    category: "Business",
  },
  {
    id: 4,
    title: "Mental Health in the Digital Age",
    description: "Understanding the impact of technology on mental wellbeing.",
    image:
      "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80",
    category: "Health",
  },
  {
    id: 5,
    title: "The Evolution of Electric Vehicles",
    description: "How EVs are reshaping the future of transportation.",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    category: "Technology",
  },
  {
    id: 6,
    title: "Global Food Security",
    description: "Addressing challenges in worldwide food distribution.",
    image:
      "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=800&q=80",
    category: "Society",
  },
];

export default function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Card key={article.id} className="group overflow-hidden">
          <CardHeader className="p-0">
            <div className="aspect-video overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-sm text-primary mb-2">{article.category}</div>
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-muted-foreground">{article.description}</p>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <Button variant="ghost" className="group/button">
              Read More
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
