import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {

  posts: any[] = [];
  // posts!: Observable<any>;
  postsSub!: Subscription;
  private http = inject(HttpClient);

  constructor(private router: Router) {}

  ngOnInit() {
    this.fetchPosts();
  }

  async fetchPosts(){
    // this.posts = this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
    // this.postsSub = this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe({
    //   next: (data) => {        
    //     this.posts = data;
    //     console.log(this.posts);
    //   },
    //   error: (e) => {
    //     console.log(e);
    //   }
    // });
    try {
      this.posts = await lastValueFrom(this.http.get<any>('https://jsonplaceholder.typicode.com/posts'));
    } catch(e) {
      console.log(e);
    }
  }

  navigateToPost(post: any) {
    console.log(post);
    this.router.navigate(['/', 'tabs', 'tab2', 'posts', post?.id]);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy tab2');
    // if(this.postsSub) this.postsSub.unsubscribe();
  }

  trackByFn(index: number, post: any): number {
    return post.id;
  }
}
