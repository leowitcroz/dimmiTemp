<template>
    <ui-container class="user p-10">
        <ui-column class="mt-10 ">
            <ui-box class="px-5 py-8" :shadow="10">
                <ui-h-box class="mx-2 mb-5" nowrap center>
                    <ui-v-box>
                        <ui-avatar class="justify-center mb-3" size="100"
                            src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
                        <ui-text weight="700" class="user_name text-center " content="User" />
                        <ui-text weight="400" class="user_profession text-center mt-2 mb-2" content="User Profession" />
                        <ui-text weight="400"  class="user_review text-center px-20 mt-3-" 
                            content="Estávamos em um momento de extremo foco no atendimento ao cliente e com grande dificuldade de organizar este processo virtualmente. A plataforma ChatGuru veio como a solução perfeita e com maestria atendeu todas as expectativas. Super dinâmico, organizado e com excelente suporte. Indico de olhos fechados." />
                    </ui-v-box>
                </ui-h-box>

            </ui-box>
        </ui-column>


    </ui-container>
</template>
  
<script lang="ts" setup>


</script>
  
<style scoped lang="scss">
.user {
    .user_name{
        font-size: 20px;
    }
    .user_profession{
        
    }

    .user_review{
        
    }
}
</style>