@pokemon.each do |poke|
  json.set! poke.id do
    json.(poke, :id, :name, :image_url)
    # json.stats do
    #   json.extract! poke, :attack, :defense
    # end
  end
end
