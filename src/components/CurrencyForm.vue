<template>
  <div class="buy-sell-widget px-2">
    <div class="mb-3">
                                            <label class="me-sm-2">Moeda</label>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text"><i class="cc BTC-alt"></i></label>
                                                </div>
                                                <select name='currency' class="form-control">
                                                    <option value="">Selecione</option>
                                                    <option value="bitcoin">Bitcoin</option>
                                                    <option value="litecoin">Litecoin</option>
                                                    <option value="ethereum">Ethereum</option>
                                                    <option value="xrp">XRP</option>
                                                    <option value="axs">AXS</option>
                                                    <option value="bat">BAT</option>
                                                    <option value="chiliz">Chiliz</option>
                                                    <option value="mana">MANA</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="me-sm-2">Moeda de troca</label>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text"><i class="fa fa-bank"></i></label>
                                                </div>
                                                <select class="form-control" name="method">
                                                    <option value="">Selecione</option>
                                                    <option value="bank">R$ - Real</option>
                                                    <option value="master">$ - USD</option>
                                                </select>
                                            </div>
                                        </div>
                                        <a href="/signin" class="btn btn-success w-100">Comprar Agora</a>
  </div>
</template>


