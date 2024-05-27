"use client"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

const useProgressScroll = (all = false)  => {
  const [completion, setCompletion] = useState(0);
  const  location = useLocation();
  useEffect(() => {
    
    setCompletion(0)
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if(scrollHeight) {
        if(all) {
          setCompletion(Number(currentProgress));
        }else{
          setCompletion(
            Number((currentProgress / scrollHeight).toFixed(2)) * 100
          );
        }
   
      }
    }
    
    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    }

  }, [all, location]);

  return completion;
}

export default useProgressScroll