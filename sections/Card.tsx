import Icon from "../components/ui/Icon.tsx";

export interface Props {
  cards: Array<{
    card: Array<{
      image: string;
      alt: string;
      local: string;
      score: number;
      host: string;
      date: string;
      price: number;
    }>;
  }>;
}

export default function Card(
  {
    cards,
  }: Props,
) {
  return (
    <>
      <div class="justify-center flex flex-row flex-wrap gap-2">
        {cards.map(({
          card,
        }) => (
          <div class="card w-96 bg-base-100 shadow-xl">
            {card.map(({
              image,
              alt,
              local,
              score,
              host,
              date,
              price,
            }) => (
              <>
                <figure class="relative">
                  <img src={image} alt={alt} />
                  <div class="absolute right-0 top-0">
                    <button class="btn text-blue-50 border-transparent">
                      <Icon id="Heart" width={30} height={30} strokeWidth={2} />
                    </button>
                  </div>
                </figure>
                <div class="card-body">
                  <div class="flex flex-row">
                    <p class="text-base font-semibold">{local}</p>
                    <div class="justify-end">
                      <p class="text-base font-semibold">{score}</p>
                    </div>
                  </div>
                  <p class="text-base font-normal">Hospede-se com {host}</p>
                  <p class="text-base font-normal">{date}</p>
                  <p class="text-base font-semibold">
                    R${price}
                    <p class="text-base font-normal">noite</p>
                  </p>
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
