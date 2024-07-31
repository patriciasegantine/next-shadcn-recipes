import SkeletonCard from "@/components/skeleton-card";

export default function Loading() {
  
  return (
    <main>
      <div className='grid grid-cols-3 gap-8'>
        {
          Array.from({length: 9}, (_, i) => (
            <SkeletonCard key={i}/>
          ))
        }
      </div>
    </main>
  );
}
