package com.example.zrp.middleware;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;


@RestController
public class ProxyController {

    private final RestTemplate restTemplate;

    @Value("${pokemon.api.url}")
    private String apiUrlString;

    public ProxyController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Cacheable("pokemonList")
    @GetMapping("/api")
    public ResponseEntity<String> proxy(@RequestParam(required = false) MultiValueMap<String, String> param) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(apiUrlString).queryParams(param);
        
        ResponseEntity<String> response = restTemplate.getForEntity(builder.toUriString(), String.class);
        return response;
    }

    @Cacheable("pokemon")
    @GetMapping("/api/{name}")
    public ResponseEntity<String> getPokemon(@PathVariable String name) {
        String pokeApiUrl = apiUrlString + "/" + name;
        ResponseEntity<String> response = restTemplate.getForEntity(pokeApiUrl, String.class);
        return ResponseEntity.status(response.getStatusCode()).body(response.getBody());
    }
}