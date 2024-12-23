  import { HttpClient } from '@angular/common/http';
  import { Component, Inject, inject, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { lastValueFrom } from 'rxjs';

  @Component({
    selector: 'app-single-post',
    templateUrl: './single-post.page.html',
    styleUrls: ['./single-post.page.scss'],
  })
  export class SinglePostPage implements OnInit {

    id!: string | null;
    
    post: any = {};

    constructor(private http: HttpClient, private route: ActivatedRoute) {}

    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.fetchPostById();
    }

    async fetchPostById(){
        try {
          this.post = await lastValueFrom(this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${this.id}`));
        } catch(e) {
          console.log(e);
        }
      }

  }
