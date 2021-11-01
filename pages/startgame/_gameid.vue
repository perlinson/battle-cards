<template>
  <div>
    <audio autoplay loop>
      <source
        src="https://00e9e64bac661bf69f4ecbb6edecc504a7b7352095dde781a7-apidata.googleusercontent.com/download/storage/v1/b/image-storage.sukmaranggapradeta.com/o/Yugioh!%20The%20Duelists%20of%20the%20Roses%20Soundtrack%20-%20Vs%20Lancastrians%20(Extended).mp3?qk=AD5uMEv_ssoeef-yXzO0_R6AF567K6cpWUplPuay-kVf7_dTdEEJZoNpzh1Y01jyMwv0KFWYf_ZoBFGCCO2sK9RjFAA_UzQ6ibX77PwMxDJLURjXjpP85fd02ubjIsF7xoBVhZnEs1nqEHGsiw856BF7C-4b-beoW5gsv0H-D0MI4Q-uhatGAVK7SqmvJqpA0M-kqiUASKBZGtZCqPMLOB4XAB-a_nSFEONxFZxmNTsnxPRd2YeXugREbzt6ekDgLoZK_RCQfwSf8_Bz8Nm2XOAfSFO0S6OJJBEr8fE7Vud0g1QZ-vrt4ece_PhBh0qW8nX16il6Od77-KYf9QtkyTAoFPijWwrx-HgKKwzuGi-_UNBjEIO-1N9gTG4494YlAbLrxkXk7REbMdVaUnioImue2VehiMlzJKAkFcaiOKyh45dVEM6cpj0-V40cDenqEhOqgrZU_YPqYLeg4UmAWVj7-RUX9FMQgwGqOsdWf52I8SlgEtybGRPpOZmrEd602Hwxt2PBC-sUVWHE4FHEsRHGb_VElhTK-LPK7Aa3-YhkB6Lss_atm8yE990frXmgvKBozjOMcMtNM9iMNQ8R6jBqrQW04y3HYVZcLAEY5OrOaUMWwNORuXMV0m2CwVZ-wYeFLESkBUfpBKvwDxB47SzCc4FDJn97UbxoOXg9ozu-4oIyYkdm8e-dGZewBPa8D_UR6M7CNLS1YBIfcjVYHE9-lo5Vq6N8in7m-zOlTjVSy09y13Nm2XVJ8G0X7Hm003LCRHTjxC1M8pWHHLujYwkwmZbh9OyAzMoVcFA6-vAdQsH0AZcVlf1HHTHudi_MIrbTLWtLPYd7zz9YaNCvcwvC9LpRDNJty1PVWQYdtVOlgz8usgy6kMb9dKLHADCI3CEKeO5RdtciADJKiuUIfj9ZcNzHHN54cQ"
      />
    </audio>

    <div v-if="!disable" class="container my-4">
      <img
        src="https://media.giphy.com/media/vZRdMe89bFkTm/giphy.gif"
        alt="waiting"
      />
      <br />
      <p class="waiting">Waiting...another player</p>
    </div>
    <div v-if="disable" id="allthethings">
      <img
        id="bg"
        src="https://images5.alphacoders.com/321/thumb-1920-321887.jpg"
        alt
      />
      <nuxt-link :to="{ path: '/ingame/' + $route.params.id }">
        <div id="single" @click="savetodb">START GAME</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
   watch: {
      room() {
        if (this.room.players.length !== 2) {
          this.disable = false;
        } else {
          this.disable = true;
        }
      },
      
    }
}
</script>
