export type Category =
  | 'Party Wear'
  | 'Festive'
  | 'Pre Stitched Sarees'
  | 'Suits'
  | 'Lehengas'
  | 'Fusion Sets'
  | 'Indo Western'
  | 'Couture'

export type Product = {
  slug: string
  title: string
  subtitle: string
  priceFrom?: number
  categories: Category[]
  image: 'houseofmd-01' | 'houseofmd-02'
  details: string[]
}

export const products: Product[] = [
  {
    slug: 'gold-mirror-work-suit-set',
    title: 'Gold Mirror Work Suit Set',
    subtitle: 'Party wear elegance with statement detailing',
    priceFrom: 299,
    categories: ['Party Wear', 'Festive', 'Suits', 'Couture'],
    image: 'houseofmd-01',
    details: [
      'Intricate mirror-work detailing',
      'Luxe sheen fabric for evening wear',
      'Custom sizing & styling support available',
    ],
  },
  {
    slug: 'black-floral-saree-with-gold-border',
    title: 'Black Floral Saree with Gold Border',
    subtitle: 'Indo-western glamour with an editorial finish',
    priceFrom: 249,
    categories: ['Party Wear', 'Festive', 'Pre Stitched Sarees', 'Indo Western'],
    image: 'houseofmd-02',
    details: [
      'Gold-edged border for a premium finish',
      'Perfect for receptions & cocktail events',
      'Pre-stitched options available on request',
    ],
  },
]

export const categories: Category[] = [
  'Party Wear',
  'Festive',
  'Pre Stitched Sarees',
  'Suits',
  'Lehengas',
  'Fusion Sets',
  'Indo Western',
  'Couture',
]

