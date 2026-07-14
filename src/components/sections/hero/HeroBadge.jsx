import { Badge } from '@/components/ui/badge'
import { Sparkles } from 'lucide-react'
import React from 'react'

const HeroBadge = () => {
  return (
      <Badge className={"mb-4"} variant='secondary'>
        <Sparkles />
        Available for Freelance
      </Badge>
  )
}

export default HeroBadge
