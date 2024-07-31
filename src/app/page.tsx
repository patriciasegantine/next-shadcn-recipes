import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface Recipe {
  title: string,
  image: string,
  time: number,
  description: string,
  vegan: boolean,
  id: string
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:5000/recipes')
  
  await new Promise((require) => setTimeout(require, 3000))
  
  return result.json()
}

export default async function Home() {
  const recipes = await getRecipes()
  
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {recipes?.map(recipe => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`}/>
                <AvatarFallback>
                  {recipe.title.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <Button
                variant="default"
                size="sm"
              >View Recipe</Button>
              {
                recipe.vegan && <Badge variant="secondary">Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Pagination className='mt-4'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#"/>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationEllipsis/>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationNext href="#"/>
          </PaginationItem>
        
        </PaginationContent>
      </Pagination>
    
    </main>
  )
}
