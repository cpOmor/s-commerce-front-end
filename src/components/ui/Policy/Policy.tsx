import shipping from '@/assets/free-shipping_12517292.png'
import free from '@/assets/cycle_10335069.png'
import Payment from '@/assets/credit-card_12238829.png'
import Quality from '@/assets/best-seller_9203481.png'
import Image from "next/image"
import Container from '@/components/shared/Container'
const Policy = () => {
  return (
      <Container>
        <div className="bg-white md:shadow rounded-lg lg:h-[150px] md:h-[250px] h-full mt-20 md:border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center gap-5 lg:px-5 px-0">
              <div className="flex items-center gap-5">
                 <div>
                     <Image className="w-[70px] h-[70px]" src={shipping} alt='shipping'/>
                 </div>
                  <div>
                     <h3 className="md:text-[20px] text-[16px] font-semibold">Free Shipping</h3>
                    <p className=" text-[14px] font-normal text-gray-500 mt-1">When ordering over $100</p>
                  </div>
              </div>

              <div className="flex items-center gap-5">
                 <div>
                     <Image className="w-[60px] h-[60px]" src={free} alt='shipping'/>
                 </div>
                  <div>
                     <h3 className="md:text-[20px] text-[16px] font-semibold">Free Return</h3>
                    <p className=" text-[14px] font-normal text-gray-500 mt-1">Get Return within 30 days</p>
                  </div>
              </div>

              <div className="flex items-center gap-5">
                 <div>
                     <Image className="w-[60px] h-[60px]" src={Payment} alt='shipping'/>
                 </div>
                  <div>
                     <h3 className="md:text-[20px] text-[16px] font-semibold">Secure Payment</h3>
                    <p className="text-[14px] font-normal text-gray-500 mt-1">100% Secure Online Payment</p>
                  </div>
              </div>

              <div className="flex items-center gap-5">
                 <div>
                     <Image className="w-[60px] h-[60px]" src={Quality} alt='shipping'/>
                 </div>
                  <div>
                     <h3 className="md:text-[20px] text-[16px] font-semibold">Best Quality</h3>
                    <p className=" text-[14px] font-normal text-gray-500 mt-1">Original Product Guarenteed</p>
                  </div>
              </div>

             
        </div>
      </Container>
  )
}

export default Policy