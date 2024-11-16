Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # users
  post 'users/create', to: 'users#create'
  post 'users/login', to: 'users#login'


  # postagens
  get 'postagens/index'
  post 'postagens/create'
  delete 'postagens/:id', to: 'postagens#destroy'
  post 'postagens/like/:id', to: 'postagens#like'
  post 'postagens/deslike/:id', to: 'postagens#deslike'

  # comentarios
  get 'comentarios/index'
  post 'comentarios/create'
  delete 'comentarios/:id', to: 'comentarios#destroy'
  post 'comentarios/like/:id', to: 'comentarios#like'
  delete 'comentarios/deslike/:id', to: 'comentarios#deslike'

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.

  # Defines the root path route ("/")
  # root "posts#index"
end
